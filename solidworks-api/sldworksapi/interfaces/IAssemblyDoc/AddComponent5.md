---
type: method
interface: IAssemblyDoc
member: AddComponent5
returns: Component2
parameters:
  -
    name: CompName
    type: System.String
    description: Path name of a pre-loaded part or assembly to add as a component (see Remarks )
  -
    name: ConfigOption
    type: System.Int32
    description: Mode in which to open the document as specified in swAddComponentConfigOptions_e
  -
    name: NewConfigName
    type: System.String
    description: Name for the new assembly configuration; valid only if ConfigOption = swAddComponentConfigOptions_e.swAddComponentConfigOptions_NewConfigWithAllReferenceModels - or - swAddComponentConfigOptions_e.swAddComponentConfigOptions_NewConfigWithAsmStructure
  -
    name: UseConfigForPartReferences
    type: System.Boolean
    description: If true, the configuration specified in ExistingConfigName is used
  -
    name: ExistingConfigName
    type: System.String
    description: Name of the configuration of the loaded component ; valid only if UseConfigForPartReferences = true
  -
    name: X
    type: System.Double
    description: X coordinate of the component center
  -
    name: Y
    type: System.Double
    description: Y coordinate of the component center
  -
    name: Z
    type: System.Double
    description: Z coordinate of the component center
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.CopyWithMates
  - IAssemblyDoc.InsertEnvelope
  - IAssemblyDoc.InsertImportedComponent
  - IAssemblyDoc.ReplaceComponents
keywords:
  - components
  - see
  - also
  - icomponent2
  - assemblies
  - iassemblydoc
  - addcomponent5
  - assembly
  - doc
  - add
  - component5
  - comp
  - name
  - string
  - config
  - option
  - int32
  - new
  - use
  - part
  - references
  - boolean
  - existing
  - double
  - component2
  - insert
  - instance
  - virtual
  - component
  - vba
  - vb
  - net
  - mate
---

# IAssemblyDoc.AddComponent5

Adds the specified component for the specified configuration options to this assembly.

## Signature

```csharp
Component2 AddComponent5( 
   System.String
CompName
,
   System.Int32
ConfigOption
,
   System.String
NewConfigName
,
   System.Boolean
UseConfigForPartReferences
,
   System.String
ExistingConfigName
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

- `CompName` (System.String): Path name of a pre-loaded part or assembly to add as a component (see Remarks )
- `ConfigOption` (System.Int32): Mode in which to open the document as specified in swAddComponentConfigOptions_e
- `NewConfigName` (System.String): Name for the new assembly configuration; valid only if ConfigOption = swAddComponentConfigOptions_e.swAddComponentConfigOptions_NewConfigWithAllReferenceModels - or - swAddComponentConfigOptions_e.swAddComponentConfigOptions_NewConfigWithAsmStructure
- `UseConfigForPartReferences` (System.Boolean): If true, the configuration specified in ExistingConfigName is used
- `ExistingConfigName` (System.String): Name of the configuration of the loaded component ; valid only if UseConfigForPartReferences = true
- `X` (System.Double): X coordinate of the component center
- `Y` (System.Double): Y coordinate of the component center
- `Z` (System.Double): Z coordinate of the component center

## Return Value

IComponent2

## Remarks

The specified file must be loaded in memory. A file is loaded into memory when you load the file in your SOLIDWORKS Design session (
ISldWorks::OpenDoc6
) or open an assembly that already contains the file.
To add a new instance of an existing virtual component, use
IComponent2::GetPathName
to get the virtual component's path and file name.
If you want to add the component at a position relative to the root component, use
IComponent2::Transform2
to reposition the component immediately after calling this method. Or, you can use
IAssemblyDoc::AddComponents
or
IAssemblyDoc::AddComponents2
to specify the transform when inserting a component, insert as many components as you want at once, and rotate and scale the component through the transform matrix.
IMPORTANT:
X, Y, and Z are relative to the bounding box of the component. Use this method to approximately position the component. Then use IComponent2::Transform2 to more precisely position the component.

## Examples

- Insert New Instance of Virtual Component (VBA) (Insert_New_Instance_of_Virtual_Component_Example_VB.htm)
- Insert New Instance of Virtual Component (VB.NET) (Insert_New_Instance_of_Virtual_Component_Example_VBNET.htm)
- Insert New Instance of Virtual Component (C#) (Insert_New_Instance_of_Virtual_Component_Example_CSharp.htm)
- Add Component and Mate (VBA) (Add_Component_and_Mate_Example_VB.htm)
- Add Component and Mate (VB.NET) (Add_Component_and_Mate_Example_VBNET.htm)
- Add Component and Mate (C#) (Add_Component_and_Mate_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.CopyWithMates`
- `IAssemblyDoc.InsertEnvelope`
- `IAssemblyDoc.InsertImportedComponent`
- `IAssemblyDoc.ReplaceComponents`