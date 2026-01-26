---
type: property
interface: ISketchManager
member: AddToDB
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - sketch
  - entities
  - database
  - solidworks
  - see
  - also
  - isketch
  - addtodb
  - isketchmanager
  - manager
  - add
  - db
  - boolean
  - assembly
  - bounding
  - box
  - using
  - components
  - vb
  - net
  - vba
readonly: null
---

# ISketchManager.AddToDB

Gets or sets whether sketch entities are added directly to the SOLIDWORKS database.

## Signature

```csharp
System.Boolean AddToDB {get; set;}
```
## Parameters

None.

## Return Value

True to add items directly to the SOLIDWORKS database, false to not

## Remarks

One of the benefits of adding sketch entities directly to the database is that you can avoid grid and entity snapping. For example, if you create a sketch line whose endpoint is near another entity or grid point, the new sketch line endpoint snaps to the other entity or grid point. Setting this property to true avoids this behavior during sketch entity creation.
After setting this property to true:
It is not possible to undo the creation of some types of sketch entities.
You must reset it to false to restore SOLIDWORKS' normal operating mode.
This property and
ISketchManager::DisplayWhenAdded
improve performance during sketch entity creation. ISketchManager::DisplayWhenAdded requires that this property be set to true.
If you want to constrain all the sketch entities after creation, use
ISketch::ConstrainAll
.

## Examples

- Get Assembly Bounding Box Using Components (C#) (Get_Assembly_Bounding_Box_Using_Components_Example_CSharp.htm)
- Get Assembly Bounding Box Using Components (VB.NET) (Get_Assembly_Bounding_Box_Using_Components_Example_VBNET.htm)
- Get Assembly Bounding Box Using Components (VBA) (Get_Assembly_Bounding_Box_using_Components_Example_VB.htm)