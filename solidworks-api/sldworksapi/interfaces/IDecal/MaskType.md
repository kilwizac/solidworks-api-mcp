---
type: property
interface: IDecal
member: MaskType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IDecal.GetMaskExcludedColorsCount
  - IDecal.IGetMaskExcludedColors
  - IDecal.ISetMaskExcludedColors
  - IDecal.MaskFilename
  - IDecal.MaskInvert
keywords:
  - masktype
  - idecal
  - decal
  - mask
  - type
  - int32
  - types
  - each
  - vba
readonly: null
---

# IDecal.MaskType

Gets or sets the type of mask used with this decal.

## Signature

```csharp
System.Int32 MaskType {get; set;}
```
## Parameters

None.

## Return Value

Type of mask: 0 = No mask 1 = Image mask file 2 = Selective color mask 3 = Use decal image alpha channel

## Examples

- Get Mask Types of Each Decal (VBA) (Get_Mask_Types_of_Each_Decal_Example_VB.htm)

## See Also

- `IDecal.GetMaskExcludedColorsCount`
- `IDecal.IGetMaskExcludedColors`
- `IDecal.ISetMaskExcludedColors`
- `IDecal.MaskFilename`
- `IDecal.MaskInvert`