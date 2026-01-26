---
type: method
interface: IDrawingDoc
member: CreateText2
returns: System.Object
parameters:
  -
    name: TextString
    type: System.String
    description: User input text
  -
    name: TextX
    type: System.Double
    description: X text location in meters (see Remarks )
  -
    name: TextY
    type: System.Double
    description: Y text location in meters (see Remarks )
  -
    name: TextZ
    type: System.Double
    description: Z text location in meters (see Remarks )
  -
    name: TextHeight
    type: System.Double
    description: Text height in meters
  -
    name: TextAngle
    type: System.Double
    description: Text angle for rotated text in radians
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - drawings
  - ui
related:
  - IDrawingDoc.ICreateText2
keywords:
  - text
  - drawings
  - createtext2
  - idrawingdoc
  - drawing
  - doc
  - create
  - text2
  - string
  - double
  - height
  - angle
  - object
---

# IDrawingDoc.CreateText2

Creates a note containing the specified text at a given location.

## Signature

```csharp
System.Object CreateText2( 
   System.String
TextString
,
   System.Double
TextX
,
   System.Double
TextY
,
   System.Double
TextZ
,
   System.Double
TextHeight
,
   System.Double
TextAngle
)
```
## Parameters

- `TextString` (System.String): User input text
- `TextX` (System.Double): X text location in meters (see Remarks )
- `TextY` (System.Double): Y text location in meters (see Remarks )
- `TextZ` (System.Double): Z text location in meters (see Remarks )
- `TextHeight` (System.Double): Text height in meters
- `TextAngle` (System.Double): Text angle for rotated text in radians

## Return Value

Newly created note

## Remarks

The location specifies the position of the upper-left corner of the box containing the text with respect to the lower-left corner of the drawing.

## See Also

- `IDrawingDoc.ICreateText2`