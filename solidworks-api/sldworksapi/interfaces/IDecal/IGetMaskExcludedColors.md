---
type: method
interface: IDecal
member: IGetMaskExcludedColors
returns: System.Int32
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of colors excluded from the mask image
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDecal.ISetMaskExcludedColors
  - IDecal.MaskFilename
  - IDecal.MaskInvert
  - IDecal.MaskType
keywords:
  - igetmaskexcludedcolors
  - idecal
  - decal
  - mask
  - excluded
  - colors
  - count
  - int32
---

# IDecal.IGetMaskExcludedColors

Gets the colors excluded from the mask image for this decal.

## Signature

```csharp
System.Int32 IGetMaskExcludedColors( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of colors excluded from the mask image

## Return Value

in-process, unmanaged C++: Pointer to an array of the RGB colors excluded from the mask image VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IDecal::GetMaskExcludedColorsCount
to get the value of Count.

## See Also

- `IDecal.ISetMaskExcludedColors`
- `IDecal.MaskFilename`
- `IDecal.MaskInvert`
- `IDecal.MaskType`