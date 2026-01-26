---
type: method
interface: IJogFeatureData
member: GetCustomBendAllowance
returns: CustomBendAllowance
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IJogFeatureData.SetCustomBendAllowance
  - IJogFeatureData.UseDefaultBendAllowance
keywords:
  - custom
  - bend
  - allowance
  - getcustombendallowance
  - ijogfeaturedata
  - jog
  - feature
  - data
---

# IJogFeatureData.GetCustomBendAllowance

Gets the custom bend allowance for this jog feature.

## Signature

```csharp
CustomBendAllowance GetCustomBendAllowance()
```
## Parameters

None.

## Return Value

Pointer to the custom gend allowance

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- IJogFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IJogFeatureData)

## See Also

- `IJogFeatureData.SetCustomBendAllowance`
- `IJogFeatureData.UseDefaultBendAllowance`