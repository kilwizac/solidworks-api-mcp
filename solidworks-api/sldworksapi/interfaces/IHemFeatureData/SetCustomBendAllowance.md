---
type: method
interface: IHemFeatureData
member: SetCustomBendAllowance
returns: void
parameters:
  -
    name: PBendData
    type: CustomBendAllowance
    description: Custom bend allowance for the hem feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IHemFeatureData.GetCustomBendAllowance
  - IHemFeatureData.UseDefaultBendAllowance
keywords:
  - setcustombendallowance
  - ihemfeaturedata
  - hem
  - feature
  - data
  - custom
  - bend
  - allowance
  - void
---

# IHemFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for the hem feature.

## Signature

```csharp
void SetCustomBendAllowance( 
   CustomBendAllowance
PBendData
)
```
## Parameters

- `PBendData` (CustomBendAllowance): Custom bend allowance for the hem feature

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IHemFeatureData.GetCustomBendAllowance`
- `IHemFeatureData.UseDefaultBendAllowance`