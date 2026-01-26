---
type: method
interface: IMBD3DPdfData
member: SetIndependentViewPort
returns: System.Boolean
parameters:
  -
    name: ViewName
    type: System.String
    description: Name of the view (e.g., "Top View" or "*Top")
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setindependentviewport
  - imbd3dpdfdata
  - imbd3
  - pdf
  - data
  - independent
  - view
  - port
  - name
  - string
  - boolean
  - viewport
  - mbd
  - 3d
  - vb
  - net
  - vba
---

# IMBD3DPdfData.SetIndependentViewPort

Sets the specified view for an independent viewport for the SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
System.Boolean SetIndependentViewPort( 
   System.String
ViewName
)
```
## Parameters

- `ViewName` (System.String): Name of the view (e.g., "Top View" or "*Top")

## Return Value

True if the specified view is set for an independent viewport for the SOLIDWORKS MBD 3D PDF, false if not (see Remarks )

## Remarks

The
theme
for the SOLIDWORKS MBD 3D PDF must contain an independent viewport. See the examples for instructions on how to add an independent viewport to a theme and how to set a view for that independent viewport.

## Examples

- Set Independent Viewport for MBD 3D PDF (C#) (Set_Independent_Viewport_for_MBD_3D_PDF_Example_CSharp.htm)
- Set Independent Viewport for MBD 3D PDF (VB.NET) (Set_Independent_Viewport_for_MBD_3D_PDF_Example_VBNET.htm)
- Set Independent Viewport for MBD 3D PDF (VBA) (Set_Independent_Viewport_for_MBD_3D_PDF_Example_VB.htm)