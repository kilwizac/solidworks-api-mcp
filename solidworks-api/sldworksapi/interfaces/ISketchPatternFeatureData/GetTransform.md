---
type: method
interface: ISketchPatternFeatureData
member: GetTransform
returns: MathTransform
parameters:
  -
    name: Instance
    type: System.Int32
    description: Index of one repeating element in this pattern (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - sketches
related: []
keywords:
  - transform
  - patterns
  - gettransform
  - isketchpatternfeaturedata
  - sketch
  - pattern
  - feature
  - data
  - instance
  - int32
  - math
---

# ISketchPatternFeatureData.GetTransform

Gets the transform for the specified instance of this sketch pattern feature.

## Signature

```csharp
MathTransform GetTransform( 
   System.Int32
Instance
)
```
## Parameters

- `Instance` (System.Int32): Index of one repeating element in this pattern (see Remarks )

## Return Value

Transform

## Remarks

See
Accessing Selections that Define Features
for additional details.

## Examples

- ISketchPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISketchPatternFeatureData)