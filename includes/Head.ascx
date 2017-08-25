<%@ Control language="C#" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="JQUERY" Src="~/Admin/Skins/jQuery.ascx" %>
<%@ Register TagPrefix="dnn" TagName="META" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" Src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="fortyfingers" TagName="STYLEHELPER" Src="~/DesktopModules/40Fingers/SkinObjects/StyleHelper/StyleHelper.ascx" %>

<dnn:META ID="mobileScale" runat="server" Name="viewport" Content="width=device-width, initial-scale=1.0" />
<dnn:JQUERY ID="dnnjQuery" runat="server" jQueryHoverIntent="true" />

<dnn:DnnCssInclude ID="DnnCssSkin" runat="server" FilePath="skin.css" PathNameAlias="SkinPath" />
<dnn:DnnCssInclude ID="DnnCssFontAwesome" runat="server" FilePath="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
<dnn:DnnCssInclude ID="DnnCssRoboto" runat="server" FilePath="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,700,700i" />
<dnn:DnnCssInclude ID="DnnCssRaleway" runat="server" FilePath="https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i,900,900i|Roboto:300,300i,400,400i,700,700i" />

<fortyfingers:STYLEHELPER ID="STYLEHELPERBODYCLASS" runat="server" BodyClass="[BcName] page[BcId]" />

<dnn:DnnJsInclude runat="server" FilePath="js/scripts.min.js" PathNameAlias="SkinPath" ForceProvider="DnnFormBottomProvider" Priority="10" />
