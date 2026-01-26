---
type: property
interface: ISimpleFilletFeatureData2
member: PropagateFeatureToParts
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - ISimpleHoleFeatureData2.AssemblyFeatureScope
  - ISimpleHoleFeatureData2.AutoSelect
  - ISimpleHoleFeatureData2.AutoSelectComponents
keywords:
  - propagatefeaturetoparts
  - isimplefilletfeaturedata2
  - simple
  - fillet
  - feature
  - data2
  - propagate
  - parts
  - boolean
readonly: null
---

# ISimpleFilletFeatureData2.PropagateFeatureToParts

Gets or sets whether to extend the assembly simple fillet feature to all affected parts.

## Signature

```csharp
System.Boolean PropagateFeatureToParts {get; set;}
```
## Parameters

None.

## Return Value

True to extend the assembly simple fillet feature to all affected parts, false to not

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISimpleFilletFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISimpleHoleFeatureData2)

## See Also

- `ISimpleHoleFeatureData2.AssemblyFeatureScope`
- `ISimpleHoleFeatureData2.AutoSelect`
- `ISimpleHoleFeatureData2.AutoSelectComponents`