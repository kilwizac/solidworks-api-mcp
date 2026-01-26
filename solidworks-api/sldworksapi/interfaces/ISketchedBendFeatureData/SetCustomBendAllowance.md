---
type: method
interface: ISketchedBendFeatureData
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
  - sketches
related:
  - ISketchedBendFeatureData.GetCustomBendAllowance
  - ISketchedBendFeatureData.UseDefaultBendAllowance
keywords:
  - bends
  - custom
  - bend
  - allowance
  - setcustombendallowance
  - isketchedbendfeaturedata
  - sketched
  - feature
  - data
  - void
  - deduction
  - vba
---

# ISketchedBendFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for this sketched bend.

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
for additional details.

## Examples

- Set Custom Bend Deduction (VBA) (Set_Custom_Bend_Deduction_Example_VB.htm)

## See Also

- `ISketchedBendFeatureData.GetCustomBendAllowance`
- `ISketchedBendFeatureData.UseDefaultBendAllowance`