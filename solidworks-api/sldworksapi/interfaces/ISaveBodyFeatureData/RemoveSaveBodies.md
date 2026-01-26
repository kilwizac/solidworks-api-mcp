---
type: method
interface: ISaveBodyFeatureData
member: RemoveSaveBodies
returns: System.Boolean
parameters:
  -
    name: Bodies
    type: System.Object
    description: Array of bodies to remove from this Save Bodies feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
related:
  - ISaveBodyFeatureData.AddSaveBodies
  - ISaveBodyFeatureData.GetSaveBodies
keywords:
  - removesavebodies
  - isavebodyfeaturedata
  - save
  - body
  - feature
  - data
  - remove
  - bodies
  - object
  - boolean
---

# ISaveBodyFeatureData.RemoveSaveBodies

Removes the specified bodies from this Save Bodies feature.

## Signature

```csharp
System.Boolean RemoveSaveBodies( 
   System.Object
Bodies
)
```
## Parameters

- `Bodies` (System.Object): Array of bodies to remove from this Save Bodies feature

## Return Value

True if the bodies are removed from this Save Bodies feature, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ISaveBodyFeatureData.AddSaveBodies`
- `ISaveBodyFeatureData.GetSaveBodies`