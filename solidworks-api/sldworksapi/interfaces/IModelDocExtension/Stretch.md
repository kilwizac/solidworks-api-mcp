---
type: method
interface: IModelDocExtension
member: Stretch
returns: void
parameters:
  -
    name: KeepRelations
    type: System.Boolean
    description: True to keep the sketch relations intact, false to sever them
  -
    name: BaseX
    type: System.Double
    description: x coordinate of the base point
  -
    name: BaseY
    type: System.Double
    description: y coordinate of the base point
  -
    name: DestX
    type: System.Double
    description: x coordinate of the destination stretch
  -
    name: DestY
    type: System.Double
    description: y coordinate of the destination of the stretch
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - stretch
  - sketch
  - see
  - also
  - isketch
  - entities
  - imodeldocextension
  - model
  - doc
  - extension
  - keep
  - relations
  - boolean
  - base
  - double
  - dest
  - void
---

# IModelDocExtension.Stretch

Stretch the selected entities.

## Signature

```csharp
void Stretch( 
   System.Boolean
KeepRelations
,
   System.Double
BaseX
,
   System.Double
BaseY
,
   System.Double
DestX
,
   System.Double
DestY
)
```
## Parameters

- `KeepRelations` (System.Boolean): True to keep the sketch relations intact, false to sever them
- `BaseX` (System.Double): x coordinate of the base point
- `BaseY` (System.Double): y coordinate of the base point
- `DestX` (System.Double): x coordinate of the destination stretch
- `DestY` (System.Double): y coordinate of the destination of the stretch

## Return Value

Unknown.