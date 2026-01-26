---
type: method
interface: IMiterFlangeFeatureData
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
  - IMiterFlangeFeatureData.GetCustomBendAllowance
  - IMiterFlangeFeatureData.UseDefaultBendAllowance
keywords:
  - setcustombendallowance
  - imiterflangefeaturedata
  - miter
  - flange
  - feature
  - data
  - custom
  - bend
  - allowance
  - void
---

# IMiterFlangeFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for this miter flange feature.

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

- `IMiterFlangeFeatureData.GetCustomBendAllowance`
- `IMiterFlangeFeatureData.UseDefaultBendAllowance`