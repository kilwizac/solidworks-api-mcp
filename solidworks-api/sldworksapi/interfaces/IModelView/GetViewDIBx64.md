---
type: method
interface: IModelView
member: GetViewDIBx64
returns: System.Int64
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IModelView.GetViewDIB
keywords:
  - device
  - independent
  - bitmap
  - dib
  - model
  - views
  - getviewdibx64
  - imodelview
  - view
  - di
  - bx64
  - int64
  - names
  - components
  - window
  - handles
  - dibsections
  - vb
  - net
  - vba
---

# IModelView.GetViewDIBx64

Gets an image of the document as it looks in Normal view or in the print preview in 64-bit applications.

## Signature

```csharp
System.Int64 GetViewDIBx64()
```
## Parameters

None.

## Return Value

Pointer to DIBSECTION for image

## Remarks

The image type and resolution can be controlled interactively under TIFF export options.
If TIFF export is set to screen, then the output from this method is based on the current screen resolution. If it's set to print, then the output is based on the DPI specified in the TIFF options dialog.
The memory for the image bits (DIBSECTION.dsBm.bmBits) and this structure are allocated by the SOLIDWORKS Design application and must be deleted by the caller. For more information, see the description of Bitmap structures and DIBSECTION in Microsoft Help.
NOTE:
This method is only available through early binding and with 64-bit versions of the SOLIDWORKS Design software.

## Examples

- Get Names of Components, Window Handles, and DIBSECTIONs (C#) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_CSharp.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VB.NET) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VBNET.htm)
- Get Names of Components, Window Handles, and DIBSECTIONs (VBA) (Get_Names_of_Components_and_Window_Handle,_and_DIBSECTION_Example_VB.htm)

## See Also

- `IModelView.GetViewDIB`