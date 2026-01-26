---
type: method
interface: IRipFeatureData
member: GetDirection
returns: System.Int32
parameters:
  -
    name: Edge
    type: System.Object
    description: Edge
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRipFeatureData.SetDirection
keywords:
  - getdirection
  - iripfeaturedata
  - rip
  - feature
  - data
  - direction
  - edge
  - object
  - int32
---

# IRipFeatureData.GetDirection

Gets the rip direction for the specified edge.

## Signature

```csharp
System.Int32 GetDirection( 
   System.Object
Edge
)
```
## Parameters

- `Edge` (System.Object): Edge

## Return Value

Direction of the rip feature for the specified edge: 0 = this direction 1 = other direction 2 = both directions

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## Examples

- IRipFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IRipFeatureData)

## See Also

- `IRipFeatureData.SetDirection`