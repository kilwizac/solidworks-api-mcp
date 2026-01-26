---
type: method
interface: IAssemblyDoc
member: InsertEnvelope
returns: Component2
parameters:
  -
    name: CompName
    type: System.String
    description: Path and file name of file containing a part to insert as an envelope
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration from which to load the envelope component
  -
    name: X
    type: System.Double
    description: X coordinate of the center of the envelope component's bounding box
  -
    name: Y
    type: System.Double
    description: Y coordinate of the center of the envelope component's bounding box
  -
    name: Z
    type: System.Double
    description: Z coordinate of the center of the envelope component's bounding box
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddComponent5
  - IAssemblyDoc.AddComponents
  - IAssemblyDoc.IAddComponents2
  - IAssemblyDoc.ReplaceComponents
  - IComponent2.IsEnvelope
keywords:
  - envelopes
  - create
  - insertenvelope
  - iassemblydoc
  - assembly
  - doc
  - insert
  - envelope
  - comp
  - name
  - string
  - config
  - double
  - component2
---

# IAssemblyDoc.InsertEnvelope

Adds an envelope in the specified configuration name in this assembly.

## Signature

```csharp
Component2 InsertEnvelope( 
   System.String
CompName
,
   System.String
ConfigName
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `CompName` (System.String): Path and file name of file containing a part to insert as an envelope
- `ConfigName` (System.String): Name of the configuration from which to load the envelope component
- `X` (System.Double): X coordinate of the center of the envelope component's bounding box
- `Y` (System.Double): Y coordinate of the center of the envelope component's bounding box
- `Z` (System.Double): Z coordinate of the center of the envelope component's bounding box

## Return Value

IComponent2

## Remarks

CompName does not have to be open before running this method. If it is not open, then this method opens it in a hidden state.
If ConfigName is empty or specifies a configuration that does not exist, then the current configuration is used.
The X, Y, Z parameters of this method are the center of the component bounding box. You must use
IComponent2::Transform2
on the return interface pointer if you want to more precisely position the component.

## See Also

- `IAssemblyDoc.AddComponent5`
- `IAssemblyDoc.AddComponents`
- `IAssemblyDoc.IAddComponents2`
- `IAssemblyDoc.ReplaceComponents`
- `IComponent2.IsEnvelope`