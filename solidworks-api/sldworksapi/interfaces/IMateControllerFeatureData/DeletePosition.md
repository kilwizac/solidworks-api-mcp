---
type: method
interface: IMateControllerFeatureData
member: DeletePosition
returns: System.Boolean
parameters:
  -
    name: PositionName
    type: System.String
    description: Name of mate position to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - deleteposition
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - delete
  - position
  - name
  - string
  - boolean
---

# IMateControllerFeatureData.DeletePosition

Deletes the specified mate position from this mate controller.

## Signature

```csharp
System.Boolean DeletePosition( 
   System.String
PositionName
)
```
## Parameters

- `PositionName` (System.String): Name of mate position to delete

## Return Value

True if mate position successfully deleted, false if not

## Remarks

Before calling this method, use
IMateControllerFeatureData::GetPositions
to get the existing mate positions.