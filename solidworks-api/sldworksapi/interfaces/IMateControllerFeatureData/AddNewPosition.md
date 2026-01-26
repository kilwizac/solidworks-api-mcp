---
type: method
interface: IMateControllerFeatureData
member: AddNewPosition
returns: System.Boolean
parameters:
  -
    name: PositionName
    type: System.String
    description: Name of mate position to add
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - addnewposition
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - add
  - new
  - position
  - name
  - string
  - boolean
---

# IMateControllerFeatureData.AddNewPosition

Adds a mate position name to this mate controller.

## Signature

```csharp
System.Boolean AddNewPosition( 
   System.String
PositionName
)
```
## Parameters

- `PositionName` (System.String): Name of mate position to add

## Return Value

True if mate position successfully created, false if not

## Examples

- IMateControllerFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateControllerFeatureData)