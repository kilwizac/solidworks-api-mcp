---
type: property
interface: ISldWorks
member: ActiveDoc
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - ISldWorks.ActivateDoc2
  - ISldWorks.EnumDocuments2
  - ISldWorks.GetFirstDocument
  - ISldWorks.GetOpenDocument
  - ISldWorks.GetOpenDocumentByName
  - ISldWorks.GetOpenFileName
  - ISldWorks.GetOpenedFileInfo
  - ISldWorks.IActivateDoc3
  - ISldWorks.IActiveDoc2
  - ISldWorks.IGetFirstDocument2
  - ISldWorks.IGetOpenDocumentByName2
  - ISldWorks.OpenDoc6
keywords:
  - document
  - active
  - activedoc
  - isldworks
  - sld
  - works
  - doc
  - object
  - create
  - equation
  - driven
  - curve
  - vb
  - net
  - vba
readonly: true
---

# ISldWorks.ActiveDoc

Gets the currently active document.

## Signature

```csharp
System.Object ActiveDoc {get;}
```
## Parameters

None.

## Return Value

Model document or Nothing or null if the operation fails

## Remarks

If no document is active, then Nothing or null is returned. This is a read-only property.
The currently active document cannot be the document that is being edited by the end-user. For example, you can use in-context editing to modify an assembly component. The currently active document is the assembly, but the edit target is the assembly component. For assemblies, you can determine the edit target by using the
IAssemblyDoc::GetEditTarget
or
IAssemblyDoc::IGetEditTarget2
method.

## Examples

- Create Equation-driven Curve (C#) (Create_Equation-driven_Curve_Example_CSharp.htm)
- Create Equation-driven Curve (VB.NET) (Create_Equation-driven_Curve_Example_VBNET.htm)
- Create Equation-driven Curve (VBA) (Create_Equation-driven_Curve_Example_VB.htm)

## See Also

- `ISldWorks.ActivateDoc2`
- `ISldWorks.EnumDocuments2`
- `ISldWorks.GetFirstDocument`
- `ISldWorks.GetOpenDocument`
- `ISldWorks.GetOpenDocumentByName`
- `ISldWorks.GetOpenFileName`
- `ISldWorks.GetOpenedFileInfo`
- `ISldWorks.IActivateDoc3`
- `ISldWorks.IActiveDoc2`
- `ISldWorks.IGetFirstDocument2`
- `ISldWorks.IGetOpenDocumentByName2`
- `ISldWorks.OpenDoc6`