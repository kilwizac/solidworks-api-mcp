---
type: property
interface: ILocalLinearPatternFeatureData
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
  - ilocallinearpatternfeaturedata
  - local
  - linear
  - pattern
  - feature
  - data
  - synchronize
  - flexible
  - components
  - boolean
readonly: null
---

# ILocalLinearPatternFeatureData.SynchronizeFlexibleComponents

Gets or sets whether to synchronize the movement of patterned flexible subassembly components with seed flexible subassembly components in this linear component pattern feature.

## Signature

```csharp
System.Boolean SynchronizeFlexibleComponents {get; set;}
```
## Parameters

None.

## Return Value

True to synchronize the movement of patterned flexible subassembly components with seed flexible subassembly components, false to not

## Remarks

This property is valid for a linear pattern of flexible subassemblies.
If this property is set to true, then when you move components in the seed flexible subassembly, components in the patterned flexible subassemblies also move, and vice versa.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- ILocalLinearPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILocalLinearPatternFeatureData)