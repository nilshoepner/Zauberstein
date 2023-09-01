using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase{
public SqlConnection conn = new SqlConnection();

public EventController(){}


    [HttpPost("upload")]
    public async Task<bool> Upload(
        [FromForm] IFormFile file, 
        [FromQuery] string name,
        [FromQuery] string date){

        byte[] fileContent;
        using (var fileStream = new MemoryStream())
        {
            await file.CopyToAsync(fileStream);
            fileContent = fileStream.ToArray();
        }

        int ret = 0;

        using (SqlConnection connection = new SqlConnection("Server=tcp:zaubersteinserver.database.windows.net,1433;Database=zauberstein;User ID=zauberstein;Password=Tigerberry1432;Trusted_Connection=False;Encrypt=True;"))
        {
            connection.Open();
            using (SqlCommand insert = new SqlCommand("INSERT INTO uploads (name, date, deleted, \"file\") VALUES (@name, @date, 'n', @file);", connection))
            {
                insert.Parameters.AddWithValue("@name", name);
                insert.Parameters.AddWithValue("@date", date);
                insert.Parameters.AddWithValue("@file", fileContent);
                ret = insert.ExecuteNonQuery();
            }
            
        }
        return ret == 1;
    }

    [HttpGet("get")]
    public async Task<List<IUpload>> Get(){
        List<IUpload> ret = new List<IUpload>();
        using (SqlConnection connection = new SqlConnection("Server=tcp:zaubersteinserver.database.windows.net,1433;Database=zauberstein;User ID=zauberstein;Password=Tigerberry1432;Trusted_Connection=False;Encrypt=True;"))
        {
            connection.Open();
            using (SqlCommand insert = new SqlCommand("SELECT * from uploads", connection))
            //using (SqlCommand insert = new SqlCommand("INSERT INTO uploads (name, date, deleted, \"file\") VALUES (@name, @date, 'n', @file);", connection))
            {
                
                SqlDataReader reader = insert.ExecuteReader();
                
                while (reader.Read())
                {
                    IUpload temp = new IUpload();
                    temp.name = (string) reader["name"];
                    temp.date = (DateTime) reader["date"];
                    temp.bytes = (Byte[]) reader["file"];

                    ret.Add(temp);
                }
            }
            
        }
        
        return (ret);
    }
}

public class IUpload{
    public string? name {get;set;}
    public DateTime? date{get;set;}
    public Byte[]? bytes{get;set;}
}