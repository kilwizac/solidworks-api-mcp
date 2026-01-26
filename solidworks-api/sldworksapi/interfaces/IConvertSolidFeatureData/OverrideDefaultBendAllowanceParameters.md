---
type: property
interface: IConvertSolidFeatureData
member: OverrideDefaultBendAllowanceParameters
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - overridedefaultbendallowanceparameters
  - iconvertsolidfeaturedata
  - convert
  - solid
  - feature
  - data
  - override
  - default
  - bend
  - allowance
  - parameters
  - boolean
readonly: null
---

# IConvertSolidFeatureData.OverrideDefaultBendAllowanceParameters

Sets whether to override the default custom bend allowance.

## Signature

```csharp
System.Boolean OverrideDefaultBendAllowanceParameters {get; set;}
```
## Parameters

None.

## Return Value

True to override, false to not

## Remarks

Set this property to true when you want to override the bend allowance that is inherited by default from a parent sheet metal feature. Then
Initialize
IConvertSolidFeatureData with new
ICustomBendAllowance
values for the subsequent sheet metal features.