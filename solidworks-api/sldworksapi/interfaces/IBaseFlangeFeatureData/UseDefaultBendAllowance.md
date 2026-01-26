---
type: property
interface: IBaseFlangeFeatureData
member: UseDefaultBendAllowance
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - usedefaultbendallowance
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - use
  - default
  - bend
  - allowance
  - boolean
readonly: true
---

# IBaseFlangeFeatureData.UseDefaultBendAllowance

Gets whether the bend allowance from the original sheet metal feature is used in this sheet metal base flange feature.

## Signature

```csharp
System.Boolean UseDefaultBendAllowance {get;}
```
## Parameters

None.

## Return Value

True uses the parent sheet metal bend allowance, false uses a custom bend allowance

## Remarks

If this property is false, then use
IBaseFlangeFeatureData::GetCustomBendAllowance
to get the custom bend allowance used to
initialize
this base flange.
Whether to use the default bend allowance is set during the initialization of this base flange and cannot be changed.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)