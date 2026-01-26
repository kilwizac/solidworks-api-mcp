---
type: property
interface: ILocalCircularPatternFeatureData
member: SynchronizeFlexibleComponents
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - synchronizeflexiblecomponents
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - synchronize
  - flexible
  - components
  - boolean
readonly: null
---

# ILocalCircularPatternFeatureData.SynchronizeFlexibleComponents

Gets or sets whether to synchronize the movement of flexible subassembly components in this circular component pattern feature.

## Signature

```csharp
System.Boolean SynchronizeFlexibleComponents {get; set;}
```
## Parameters

None.

## Return Value

True to synchronize the movement of flexible subassembly components, false to not

## Remarks

If this property is set to true, then when you move components in the seed flexible subassembly, components in the patterned instances move, and vice versa.