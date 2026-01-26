---
type: method
interface: IModeler
member: CreateSheetFromSurface
returns: System.Object
parameters:
  -
    name: SurfaceIn
    type: System.Object
    description: Surface from which you want to create this sheet body
  -
    name: UvRange
    type: System.Object
    description: Array of UV values for this surface
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IModeler.CreateSheetFromFaces
  - IModeler.ICreateSheetFromFaces
  - IModeler.ICreateSheetFromSurface2
  - ISurface.CreateTrimmedSheet
keywords:
  - sheet
  - bodies
  - see
  - also
  - ibody2
  - createsheetfromsurface
  - imodeler
  - modeler
  - create
  - surface
  - object
  - uv
  - range
  - cut
  - body
  - half
  - using
  - macro
  - feature
  - vba
---

# IModeler.CreateSheetFromSurface

Creates a sheet (surface) body from a surface.

## Signature

```csharp
System.Object CreateSheetFromSurface( 
   System.Object
SurfaceIn
,
   System.Object
UvRange
)
```
## Parameters

- `SurfaceIn` (System.Object): Surface from which you want to create this sheet body
- `UvRange` (System.Object): Array of UV values for this surface

## Return Value

Newly created body

## Examples

- Cut Body in Half Using Macro Feature (VBA) (Cut_Body_in_Half_using_Macro_Feature_Example_VB.htm)

## See Also

- `IModeler.CreateSheetFromFaces`
- `IModeler.ICreateSheetFromFaces`
- `IModeler.ICreateSheetFromSurface2`
- `ISurface.CreateTrimmedSheet`