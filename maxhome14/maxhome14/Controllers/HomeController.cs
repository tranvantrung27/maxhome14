using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using maxhome14.Models;

namespace maxhome14.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult GioiThieu()
    {
        return View();
    }

    public IActionResult CongTrinhThietKe()
    {
        return View();
    }

    public IActionResult CongTrinhThiCong()
    {
        return View();
    }

    public IActionResult NoiThat()
    {
        return View();
    }

    public IActionResult LienHe()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
