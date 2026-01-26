---
type: method
interface: IBody2
member: SetIgesInfo
returns: void
parameters:
  -
    name: SystemName
    type: System.String
    description: Name of the system as defined in swIGESPreferredSystem_e
  -
    name: Granularity
    type: System.Double
    description: Level of granularity
  -
    name: AttemptKnitting
    type: System.Boolean
    description: True knits the objects, false does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - setigesinfo
  - ibody2
  - body2
  - iges
  - info
  - name
  - string
  - granularity
  - double
  - attempt
  - knitting
  - boolean
  - void
---

# IBody2.SetIgesInfo

Sends IGES-specific data to the geometric modeler.

## Signature

```csharp
void SetIgesInfo( 
   System.String
SystemName
,
   System.Double
Granularity
,
   System.Boolean
AttemptKnitting
)
```
## Parameters

- `SystemName` (System.String): Name of the system as defined in swIGESPreferredSystem_e
- `Granularity` (System.Double): Level of granularity
- `AttemptKnitting` (System.Boolean): True knits the objects, false does not

## Return Value

Unknown.