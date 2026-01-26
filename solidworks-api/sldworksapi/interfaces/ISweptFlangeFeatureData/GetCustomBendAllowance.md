---
type: method
interface: ISweptFlangeFeatureData
member: GetCustomBendAllowance
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweptFlangeFeatureData.SetCustomBendAllowance
keywords:
  - getcustombendallowance
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - custom
  - bend
  - allowance
  - object
---

# ISweptFlangeFeatureData.GetCustomBendAllowance

Gets the custom bend allowance object.

## Signature

```csharp
System.Object GetCustomBendAllowance()
```
## Parameters

None.

## Return Value

ICustomBendAllowance

## Remarks

This method is valid only if
ISweptFlangeFeatureData::UseDefaultBendAllowance
is false.

## See Also

- `ISweptFlangeFeatureData.SetCustomBendAllowance`