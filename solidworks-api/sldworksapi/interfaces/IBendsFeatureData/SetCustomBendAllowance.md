---
type: method
interface: IBendsFeatureData
member: SetCustomBendAllowance
returns: void
parameters:
  -
    name: PBendData
    type: CustomBendAllowance
    description: ICustomBendAllowance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IBendsFeatureData.GetCustomBendAllowance
  - IBendsFeatureData.UseDefaultBendAllowance
keywords:
  - bend
  - allowance
  - setcustombendallowance
  - ibendsfeaturedata
  - bends
  - feature
  - data
  - custom
  - void
---

# IBendsFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for the Flatten-Bends/Process-Bends feature.

## Signature

```csharp
void SetCustomBendAllowance( 
   CustomBendAllowance
PBendData
)
```
## Parameters

- `PBendData` (CustomBendAllowance): ICustomBendAllowance

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IBendsFeatureData.GetCustomBendAllowance`
- `IBendsFeatureData.UseDefaultBendAllowance`