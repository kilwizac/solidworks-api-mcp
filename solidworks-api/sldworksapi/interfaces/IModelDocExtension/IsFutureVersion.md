---
type: method
interface: IModelDocExtension
member: IsFutureVersion
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - isfutureversion
  - imodeldocextension
  - model
  - doc
  - extension
  - future
  - version
  - boolean
  - history
  - document
  - vba
  - vb
  - net
---

# IModelDocExtension.IsFutureVersion

Gets whether this document is for a future version of SOLIDWORKS.

## Signature

```csharp
System.Boolean IsFutureVersion()
```
## Parameters

None.

## Return Value

True if the document is for a future version of SOLIDWORKS, false if not

## Remarks

As of 2012 SP5, loading future file versions is supported, and
ISldWorks::OpenDoc6
no longer throws a
swFileLoadError_e
.swFutureVersion error.
Use IModelDocExtension::IsFutureVersion to determine:
how to obtain the correct version history of a document. If a future version document is loaded in an older version of SOLIDWORKS,
IModelDoc2::VersionHistory
and
IModelDoc2::IVersionHistory
return the version history of the part template, not the version history of the future version document. To get the version history of a future version document, use
ISldWorks::VersionHistory
or
ISldWorks::IVersionHistory
to get the version history from its file.
whether a component is for a future version of SOLIDWORKS and should be hidden in the user interface of older versions. Although they can be loaded, future version components may not be actionable in older versions of SOLIDWORKS.

## Examples

- Get Version History of Future Version Document (VBA) (Get_Version_History_of_Future_Version_Document_Example_VB.htm)
- Get Version History of Future Version Document (VB.NET) (Get_Version_History_of_Future_Version_Document_Example_VBNET.htm)
- Get Version History of Future Version Document (C#) (Get_Version_History_of_Future_Version_Document_Example_CSharp.htm)