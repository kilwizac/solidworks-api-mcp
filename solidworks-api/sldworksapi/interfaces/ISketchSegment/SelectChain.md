---
type: method
interface: ISketchSegment
member: SelectChain
returns: System.Boolean
parameters:
  -
    name: Append
    type: System.Boolean
    description: True to append to the current selection list, false to replace the selection list
  -
    name: Data
    type: SelectData
    description: ISelectData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - sketches
related: []
keywords:
  - selectchain
  - isketchsegment
  - sketch
  - segment
  - select
  - chain
  - append
  - boolean
  - data
  - chains
  - entities
  - attached
  - vba
  - vb
  - net
---

# ISketchSegment.SelectChain

Selects chains of entities attached to this sketch segment.

## Signature

```csharp
System.Boolean SelectChain( 
   System.Boolean
Append
,
   SelectData
Data
)
```
## Parameters

- `Append` (System.Boolean): True to append to the current selection list, false to replace the selection list
- `Data` (SelectData): ISelectData

## Return Value

True if successful, false if not

## Remarks

Before calling this method call
ISelectionMgr::CreateSelectData
to specify Data.
This method is equivalent to right-clicking a sketch segment and selecting
Select Chain
. The chain of entities in each direction is selected. Selection ends when a branch in the chain is encountered.

## Examples

- Select Chains of Entities Attached to a Sketch Segment (VBA) (Select_Chain_of_Entities_Example_VB.htm)
- Select Chains of Entities Attached to a Sketch Segment (VB.NET) (Select_Chain_of_Entities_Example_VBNET.htm)
- Select Chains of Entities Attached to a Sketch Segment (C#) (Select_Chain_of_Entities_Example_CSharp.htm)