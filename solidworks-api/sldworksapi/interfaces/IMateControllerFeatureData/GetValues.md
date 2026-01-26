---
type: method
interface: IMateControllerFeatureData
member: GetValues
returns: System.Object
parameters:
  -
    name: PositionName
    type: System.String
    description: Name of mate position
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - getvalues
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - values
  - position
  - name
  - string
  - object
---

# IMateControllerFeatureData.GetValues

Gets the mate values for the specified mate position.

## Signature

```csharp
System.Object GetValues( 
   System.String
PositionName
)
```
## Parameters

- `PositionName` (System.String): Name of mate position

## Return Value

Array of values for all mates in PositionName