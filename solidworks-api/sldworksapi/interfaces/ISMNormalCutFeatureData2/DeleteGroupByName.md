---
type: method
interface: ISMNormalCutFeatureData2
member: DeleteGroupByName
returns: System.Boolean
parameters:
  -
    name: GroupName
    type: System.String
    description: Name of face group to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - deletegroupbyname
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - delete
  - group
  - name
  - string
  - boolean
---

# ISMNormalCutFeatureData2.DeleteGroupByName

Deletes the specified face group.

## Signature

```csharp
System.Boolean DeleteGroupByName( 
   System.String
GroupName
)
```
## Parameters

- `GroupName` (System.String): Name of face group to delete

## Return Value

True if deletion successful, false if not

## Remarks

Use
ISMNormalCutFeatureData2::GetGroupNames
to populate GroupName.
You cannot delete a group, if it is the only group that exists.