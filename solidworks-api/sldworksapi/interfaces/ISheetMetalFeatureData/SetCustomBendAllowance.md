---
type: method
interface: ISheetMetalFeatureData
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
  - IBaseFlangeFeatureData.Initialize
  - ISheetMetalFeatureData.GetCustomBendAllowance
keywords:
  - custom
  - bend
  - allowance
  - sheet
  - metal
  - see
  - also
  - isheetmetalfeaturedata
  - setcustombendallowance
  - feature
  - data
  - void
---

# ISheetMetalFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for this sheet metal feature.

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

## See Also

- `IBaseFlangeFeatureData.Initialize`
- `ISheetMetalFeatureData.GetCustomBendAllowance`