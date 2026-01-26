---
type: method
interface: IFeatureManager
member: InsertGlobalBoundingBox
returns: System.Object
parameters:
  -
    name: BBoxType
    type: System.Int32
    description: Bounding Box fit type as defined in swGlobalBoundingBoxFitOptions_e (see Remarks )
  -
    name: IncludeHiddenBodies
    type: System.Boolean
    description: True to include hidden bodies, false to not
  -
    name: IncludeSurfaceBodies
    type: System.Boolean
    description: True to include surfaces, false to not
  -
    name: Status
    type: System.Int32
    description: Status as defined by swGlobalBoundingBoxResult_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertglobalboundingbox
  - ifeaturemanager
  - feature
  - manager
  - insert
  - global
  - bounding
  - box
  - type
  - int32
  - include
  - hidden
  - bodies
  - boolean
  - surface
  - status
  - object
---

# IFeatureManager.InsertGlobalBoundingBox

Obsolete. See IFeatureManager::CreateDefinition and IBoundingBoxFeatureData.

## Signature

```csharp
System.Object InsertGlobalBoundingBox( 
   System.Int32
BBoxType
,
   System.Boolean
IncludeHiddenBodies
,
   System.Boolean
IncludeSurfaceBodies
,
   out System.Int32
Status
)
```
## Parameters

- `BBoxType` (System.Int32): Bounding Box fit type as defined in swGlobalBoundingBoxFitOptions_e (see Remarks )
- `IncludeHiddenBodies` (System.Boolean): True to include hidden bodies, false to not
- `IncludeSurfaceBodies` (System.Boolean): True to include surfaces, false to not
- `Status` (System.Int32): Status as defined by swGlobalBoundingBoxResult_e

## Return Value

IFeature

## Remarks

If BBoxType is set to swGlobalBoundingBoxFitOptions_e.swBoundingBoxType_CustomPlane, then select a face or plane using
IModelDocExtension::SelectByRay
with TypeWanted set to
swSelectType_e
.swSelFACES before calling this method.
To display or hide the Bounding Box sketch, call
IModelDoc2::SetUserPreferenceToggle
to set
swUserPreferenceToggle_e
.swViewDispGlobalBBox to true or false, respectively.
After calling this method, use
IModelDoc2::ClearSelection2
to clear the selection made when the Bounding Box is created.