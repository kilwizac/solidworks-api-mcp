---
type: method
interface: IMateControllerFeatureData
member: AddConfigurationFromPosition
returns: System.Boolean
parameters:
  -
    name: PositionName
    type: System.String
    description: Name of mate position
  -
    name: IsUpdate
    type: System.Boolean
    description: True if an update, false if not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - addconfigurationfromposition
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - add
  - configuration
  - position
  - name
  - string
  - update
  - boolean
---

# IMateControllerFeatureData.AddConfigurationFromPosition

Adds a configuration from the specified mate position.

## Signature

```csharp
System.Boolean AddConfigurationFromPosition( 
   System.String
PositionName
,
   System.Boolean
IsUpdate
)
```
## Parameters

- `PositionName` (System.String): Name of mate position
- `IsUpdate` (System.Boolean): True if an update, false if not

## Return Value

True if configuration successfully added, false if not