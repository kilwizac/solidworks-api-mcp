---
type: pattern
title: API Getting Started
keywords:
  - getting
  - started
  - object
  - model
  - hierarchy
categories:
  - documents
related: []
---

# API Getting Started

## SOLIDWORKS API Getting Started Overview

- Prior to developing SOLIDWORKS API applications, you should be familiar with using the SOLIDWORKS Design software interactively and programming in the languages that you intend to use. If you are not, then you should:
- Attend SOLIDWORKS Design training courses offered at SOLIDWORKS Authorized Training and Support Centers .
- Take courses in the programming languages that you intend to use.
- The SOLIDWORKS API SDK contains templates that help you develop SOLIDWORKS add-ins.
- Ensure that Microsoft Visual Studio is installed.
- For SOLIDWORKS Design installations, copy \apisdk\SolidWorks API SDK.msi from the installation media to a local directory. For SOLIDWORKS Design Augmented installations, copy \win_b64\resources\MSI\SOLIDWORKS API SDK.msi from the installation media to a local directory.
- Double-click apisdk.exe or SolidWorks API SDK.msi to run the API SDK InstallShield Wizard. (If you have multiple Visual Studio versions, you may need to manually copy the template zip files to the template folders of each VS version. Locate and copy the zip files to c:\Users\ user \Documents\Visual Studio 20xx\Templates\ProjectTemplates\Visual Basic and Visual C# .)
- Restart Visual Studio. SwVBAddin, SwCSharpAddin, and SOLIDWORKS COM Non-Attributed Add-in Wizard templates should be available in the Create a new project dialog. See the Using the SOLIDWORKS C# and VB.NET Add-in Templates to Create Add-ins and the Using the SOLIDWORKS COM Non-Attributed Add-in Wizard to Create a C++/CLI Add-in topics.

## SOLIDWORKS API Object Model Overview

- The ISldWorks object is the application object; it is the top-level object in the SOLIDWORKS API object hierarchy. All of the other SOLIDWORKS objects are located below the ISldWorks object in the object hierarchy and can be accessed directly or indirectly.
- For compiled help (*.chm): Each interface's help topic contains an Access Diagram section. Click the link in this section to open that interface's access diagram. For web help only: Open the Access Diagram by clicking the ISldWorks > Access Diagram > SldWorks (web help only) link. Navigate to other objects from there.
- If an object can only be accessed indirectly, then you must reference that object from another object higher in the object hierarchy. For example, the ISketchSpline object can only be accessed indirectly; it cannot exist on its own. You must reference the ISketchSpline object from the ISketchSegment object because it exists only within the context of the ISketchSegment object.
- Most of the SOLIDWORKS API objects correspond to user-interface functionality; however, several SOLIDWORKS API objects provide functionality only accessible through the SOLIDWORKS API. For example, the IFeature object lets you access features in the FeatureManager design tree, but the IAttribute object is a SOLIDWORKS API-only object because there is no corresponding user-interface functionality.

## Understanding the SOLIDWORKS API Class Hierarchy

- SOLIDWORKS does not document its API with a complete class hierarchy diagram, much like the famous MFC and .NET/WinFX class hierarchy diagrams. The reason for this is that MFC and .NET rely heavily on:
- Classes
- Implementation inheritance
- Casting between classes using static casts (C++)
- These types of class libraries and APIs can often benefit from a hierarchy diagram.
- However, SOLIDWORKS is a COM-based API that uses:
- Interfaces
- Interface inheritance
