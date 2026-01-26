---
type: method
interface: IPrimaryMemberRefPlaneFeatureData
member: SetStartAndEndReferences
returns: System.Boolean
parameters:
  -
    name: RetEntities
    type: System.Object
    description: Array of parallel IRefPlane s and/or IFace2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setstartandendreferences
  - iprimarymemberrefplanefeaturedata
  - primary
  - member
  - ref
  - plane
  - feature
  - data
  - start
  - end
  - references
  - ret
  - entities
  - object
  - boolean
---

# IPrimaryMemberRefPlaneFeatureData.SetStartAndEndReferences

Sets the start and end reference entities that are used to define the length of this structure system member.

## Signature

```csharp
System.Boolean SetStartAndEndReferences( 
   System.Object
RetEntities
)
```
## Parameters

- `RetEntities` (System.Object): Array of parallel IRefPlane s and/or IFace2 s

## Return Value

True if start and end references successfully set, false if not

## Remarks

The array set by this method should have only two entities: start and end references.

## Examples

- IPrimaryMemberRefPlaneFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPrimaryMemberRefPlaneFeatureData)