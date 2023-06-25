using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class EventController : ControllerBase{
public SqlConnection conn = new SqlConnection();

public EventController(){}

[HttpPost("upload")]
public string Upload([FromBody] test zubby ){
    
// var insert = new SqlCommand("INSERT INTO tbl (xls) VALUES (@xls)", conn);
// insert.Parameters.AddWithValue("xls", File.ReadAllBytes("template.xls"));
// insert.ExecuteNonQuery();

    string testString = "";
    using (SqlConnection connection = new SqlConnection("Server=tcp:zaubersteinserver.database.windows.net,1433;Initial Catalog=zauberstein;Persist Security Info=False;User ID=zauberstein;Password=Tigerberry1432;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
    {
        connection.Open();
        testString = connection.ToString();
        // Do work here; connection closed on following line.
        connection.Close();
    }
    return testString;
}
}

public class test{
    string best;
}