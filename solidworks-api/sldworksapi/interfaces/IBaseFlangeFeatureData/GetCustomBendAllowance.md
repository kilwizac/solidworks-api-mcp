---
type: method
interface: IBaseFlangeFeatureData
member: GetCustomBendAllowance
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getcustombendallowance
  - ibaseflangefeaturedata
  - base
  - flange
  - feature
  - data
  - custom
  - bend
  - allowance
  - object
---

# IBaseFlangeFeatureData.GetCustomBendAllowance

Gets the custom bend allowance object associated with this sheet metal base flange feature.

## Signature

```csharp
System.Object GetCustomBendAllowance()
```
## Parameters

None.

## Return Value

Custom bend allowance

## Remarks

This method is valid only if
IBaseFlangeFeatureData::UseDefaultBendAllowance
is false.
You can change the custom bend allowance after it has been
initialized
. Access the parent sheet metal to do so. See the Examples.
See
Accessing Selections that Define Features
for additional details.

## Examples

- IBaseFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBaseFlangeFeatureData)