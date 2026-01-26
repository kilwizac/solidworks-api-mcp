---
type: method
interface: IJoinFeatureData
member: IGetJoinedParts
returns: Component2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of joined parts
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IJoinFeatureData.ISetJoinedParts
  - IJoinFeatureData.JoinedParts
keywords:
  - joined
  - parts
  - see
  - also
  - ijoinfeaturedata
  - identify
  - igetjoinedparts
  - join
  - feature
  - data
  - count
  - int32
  - component2
---

# IJoinFeatureData.IGetJoinedParts

Gets the joined parts.

## Signature

```csharp
Component2 IGetJoinedParts( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of joined parts

## Return Value

in-process, unmanaged C++: Pointer to an array of joined parts, the IComponent2 objects VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IJoinFeatureData::GetJoinedPartsCount
before calling this method to determine Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IJoinFeatureData.ISetJoinedParts`
- `IJoinFeatureData.JoinedParts`