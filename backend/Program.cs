var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    var test = false;
    if(test){
        options.AddPolicy("AllowSPA",
            builder => builder.WithOrigins("https://localhost:5175")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
        );

        options.AddPolicy("CorsPolicy",
            builder => builder.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
                .SetIsOriginAllowed((host) => true)
        );
    }else{
        options.AddPolicy("AllowSPA",
            builder => builder.WithOrigins("https://zauberstein.azurewebsites.net")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials()
        );

        options.AddPolicy("CorsPolicy",
            builder => builder.WithOrigins("zaubersteinbackend.azurewebsites.net")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials()
                .SetIsOriginAllowed((host) => true)
        );
    }
});


var app = builder.Build();

app.UseCors("AllowSPA");
app.UseCors("CorsPolicy");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//  app.UseHttpsRedirection();


// app.UseCors(builder => builder
//        .AllowAnyHeader()
//        .AllowAnyMethod()
//        .AllowAnyOrigin()
//     );


app.UseAuthorization();

app.MapControllers();

app.Run();
