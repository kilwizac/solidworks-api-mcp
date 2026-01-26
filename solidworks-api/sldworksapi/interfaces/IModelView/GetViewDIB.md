---
type: method
interface: IModelView
member: GetViewDIB
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - device
  - independent
  - bitmap
  - dib
  - model
  - views
  - getviewdib
  - imodelview
  - view
  - int32
---

# IModelView.GetViewDIB

Gets an image of the document as it looks in Normal view or in the print preview.

## Signature

```csharp
System.Int32 GetViewDIB()
```
## Parameters

None.

## Return Value

Pointer to DIBSECTION for image

## Remarks

If your application must be x64 compatible, then use
IModelView::GetViewDIBx64
.
The image type and resolution can be controlled interactively under TIFF export options.
If TIFF export is set to screen, then the output from this method is based on the current screen resolution. If it's set to print, then the output is based on the DPI specified in the TIFF options dialog.
The memory for the image bits (DIBSECTION.dsBm.bmBits) and this structure are allocated by the SOLIDWORKS Design application and must be deleted by the caller. For more information, see the description of Bitmap structures and DIBSECTION in Microsoft Help.