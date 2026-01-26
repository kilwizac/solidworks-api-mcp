---
type: property
interface: ISweptFlangeFeatureData
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
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - use
  - default
  - bend
  - allowance
  - boolean
readonly: null
---

# ISweptFlangeFeatureData.UseDefaultBendAllowance

Gets or sets whether to use the bend allowance from the original sheet metal feature in this swept flange feature.

## Signature

```csharp
System.Boolean UseDefaultBendAllowance {get; set;}
```
## Parameters

None.

## Return Value

True to use the default bend allowance, false to use a custom bend allowance (see Remarks )

## Remarks

For cylindrical/conical swept flanges, this property is valid only during creation.
If this property is false, then use
ISweptFlangeFeatureData::GetCustomBendAllowance
and
ISweptFlangeFeatureData::SetCustomBendAllowance
to get and set a custom bend allowance.

## Examples

- ISweptFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweptFlangeFeatureData)