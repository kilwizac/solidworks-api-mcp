---
type: method
interface: IDecal
member: ISetMaskExcludedColors
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of colors to exclude from the mask image
  -
    name: MaskColors
    type: System.Int32
    description: in-process, unmanaged C++: Pointer to an array of the RGB colors excluded from the mask image VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDecal.GetMaskExcludedColorsCount
  - IDecal.IGetMaskExcludedColors
  - IDecal.MaskFilename
  - IDecal.MaskInvert
  - IDecal.MaskType
keywords:
  - isetmaskexcludedcolors
  - idecal
  - decal
  - mask
  - excluded
  - colors
  - count
  - int32
  - void
---

# IDecal.ISetMaskExcludedColors

Sets the colors to exclude from the mask image for this decal.

## Signature

```csharp
void ISetMaskExcludedColors( 
   System.Int32
Count
,
   ref System.Int32
MaskColors
)
```
## Parameters

- `Count` (System.Int32): Number of colors to exclude from the mask image
- `MaskColors` (System.Int32): in-process, unmanaged C++: Pointer to an array of the RGB colors excluded from the mask image VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## See Also

- `IDecal.GetMaskExcludedColorsCount`
- `IDecal.IGetMaskExcludedColors`
- `IDecal.MaskFilename`
- `IDecal.MaskInvert`
- `IDecal.MaskType`