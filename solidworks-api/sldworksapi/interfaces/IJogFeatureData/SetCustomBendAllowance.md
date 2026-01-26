---
type: method
interface: IJogFeatureData
member: SetCustomBendAllowance
returns: void
parameters:
  -
    name: PBendData
    type: CustomBendAllowance
    description: Pointer to the custom bend allowance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IJogFeatureData.GetCustomBendAllowance
  - IJogFeatureData.UseDefaultBendAllowance
keywords:
  - custom
  - bend
  - allowance
  - setcustombendallowance
  - ijogfeaturedata
  - jog
  - feature
  - data
  - void
---

# IJogFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for this jog feature.

## Signature

```csharp
void SetCustomBendAllowance( 
   CustomBendAllowance
PBendData
)
```
## Parameters

- `PBendData` (CustomBendAllowance): Pointer to the custom bend allowance

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IJogFeatureData.GetCustomBendAllowance`
- `IJogFeatureData.UseDefaultBendAllowance`