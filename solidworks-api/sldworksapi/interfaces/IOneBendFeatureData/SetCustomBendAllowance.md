---
type: method
interface: IOneBendFeatureData
member: SetCustomBendAllowance
returns: void
parameters:
  -
    name: PBendData
    type: CustomBendAllowance
    description: Custom bend allowance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IOneBendFeatureData.BendAngle
  - IOneBendFeatureData.BendDown
  - IOneBendFeatureData.BendOrder
  - IOneBendFeatureData.BendRadius
  - IOneBendFeatureData.GetCustomBendAllowance
  - IOneBendFeatureData.UseDefaultBendAllowance
  - IOneBendFeatureData.UseDefaultBendRadius
keywords:
  - bends
  - custom
  - bend
  - allowance
  - setcustombendallowance
  - ionebendfeaturedata
  - one
  - feature
  - data
  - void
---

# IOneBendFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for the bend feature.

## Signature

```csharp
void SetCustomBendAllowance( 
   CustomBendAllowance
PBendData
)
```
## Parameters

- `PBendData` (CustomBendAllowance): Custom bend allowance

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IOneBendFeatureData.BendAngle`
- `IOneBendFeatureData.BendDown`
- `IOneBendFeatureData.BendOrder`
- `IOneBendFeatureData.BendRadius`
- `IOneBendFeatureData.GetCustomBendAllowance`
- `IOneBendFeatureData.UseDefaultBendAllowance`
- `IOneBendFeatureData.UseDefaultBendRadius`