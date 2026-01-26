---
type: method
interface: ISweptFlangeFeatureData
member: SetCustomBendAllowance
returns: void
parameters:
  -
    name: PBendData
    type: System.Object
    description: ICustomBendAllowance
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setcustombendallowance
  - isweptflangefeaturedata
  - swept
  - flange
  - feature
  - data
  - custom
  - bend
  - allowance
  - object
  - void
---

# ISweptFlangeFeatureData.SetCustomBendAllowance

Sets the custom bend allowance for this swept flange feature.

## Signature

```csharp
void SetCustomBendAllowance( 
   System.Object
PBendData
)
```
## Parameters

- `PBendData` (System.Object): ICustomBendAllowance

## Return Value

Unknown.

## Remarks

This method is valid only when creating the swept flange and only if
ISweptFlangeFeatureData::UseDefaultBendAllowance
is false.
Use
ISweptFlangeFeatureData::GetCustomBendAllowance
to specify PBendData.