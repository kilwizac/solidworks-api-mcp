---
type: property
interface: IToolingSplitFeatureData
member: Depth
returns: System.Double
parameters:
  -
    name: Dir
    type: System.Int32
    description: 0 = Depth in Direction 1 1 = Depth in Direction 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - depth
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - dir
  - int32
  - double
readonly: null
---

# IToolingSplitFeatureData.Depth

Gets or sets the depth of the block in the specified direction for this tooling split feature.

## Signature

```csharp
System.Double Depth( 
   System.Int32
Dir
) {get; set;}
```
## Parameters

- `Dir` (System.Int32): 0 = Depth in Direction 1 1 = Depth in Direction 2

## Return Value

Depth

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- IToolingSplitFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IToolingSplitFeatureData)