---
type: method
interface: ISecondaryMemberBetweenPointsFeatureData
member: SetMemberPairs
returns: System.Boolean
parameters:
  -
    name: Pairs
    type: System.Object
    description: Array of IStructureSystemMemberFeatureData s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setmemberpairs
  - isecondarymemberbetweenpointsfeaturedata
  - secondary
  - member
  - between
  - points
  - feature
  - data
  - pairs
  - object
  - boolean
---

# ISecondaryMemberBetweenPointsFeatureData.SetMemberPairs

Sets the primary structure system members that pair together to create this secondary structure system member.

## Signature

```csharp
System.Boolean SetMemberPairs( 
   System.Object
Pairs
)
```
## Parameters

- `Pairs` (System.Object): Array of IStructureSystemMemberFeatureData s

## Return Value

True if member pairs successfully set, false if not

## Remarks

During editing, Pairs can contain only two objects.

## Examples

- ISecondaryMemberBetweenPointsFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISecondaryMemberBetweenPointsFeatureData)