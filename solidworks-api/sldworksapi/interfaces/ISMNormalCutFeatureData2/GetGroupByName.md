---
type: method
interface: ISMNormalCutFeatureData2
member: GetGroupByName
returns: System.Object
parameters:
  -
    name: GroupName
    type: System.String
    description: Name of face group to retrieve
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getgroupbyname
  - ismnormalcutfeaturedata2
  - ism
  - normal
  - cut
  - feature
  - data2
  - group
  - name
  - string
  - object
---

# ISMNormalCutFeatureData2.GetGroupByName

Gets the specified face group.

## Signature

```csharp
System.Object GetGroupByName( 
   System.String
GroupName
)
```
## Parameters

- `GroupName` (System.String): Name of face group to retrieve

## Return Value

ISMNormalCutGroupData

## Remarks

Use
ISMNormalCutFeatureData2::GetGroupNames
to populate GroupName.

## Examples

- ISMNormalCutFeatureData2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISMNormalCutFeatureData2)