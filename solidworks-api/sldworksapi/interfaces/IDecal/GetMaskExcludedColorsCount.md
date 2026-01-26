---
type: method
interface: IDecal
member: GetMaskExcludedColorsCount
returns: System.Int32
parameters: []
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
  - getmaskexcludedcolorscount
  - idecal
  - decal
  - mask
  - excluded
  - colors
  - count
  - int32
---

# IDecal.GetMaskExcludedColorsCount

Gets the number of colors excluded from the mask image for this decal.

## Signature

```csharp
System.Int32 GetMaskExcludedColorsCount()
```
## Parameters

None.

## Return Value

Number of colors excluded from the mask image

## Remarks

Call this method before calling
IDecal::IGetMaskExcludedColors
to get the size of the array for that method.

## See Also

- `IDecal.ISetMaskExcludedColors`
- `IDecal.MaskFilename`
- `IDecal.MaskInvert`
- `IDecal.MaskType`