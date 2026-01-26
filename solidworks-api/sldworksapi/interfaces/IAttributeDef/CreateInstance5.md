---
type: method
interface: IAttributeDef
member: CreateInstance5
returns: Attribute
parameters:
  -
    name: OwnerDoc
    type: ModelDoc2
    description: Document whose FeatureManager design tree to which to add this attribute
  -
    name: OwnerObj
    type: System.Object
    description: Component or entity to which to add this attribute: IBODY2 ICOMPONENT2 IENTITY , which can be a face, loop, edge, vertex, or feature MODELDOC2 if NULL
  -
    name: NameIn
    type: System.String
    description: Name to assign to this attribute instance (see Remarks )
  -
    name: Options
    type: System.Int32
    description: Creation control options (see Remarks )
  -
    name: ConfigurationOption
    type: System.Int32
    description: Configuration options as defined in swInConfigurationOpts_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - createinstance5
  - iattributedef
  - attribute
  - def
  - create
  - instance5
  - owner
  - doc
  - model
  - doc2
  - obj
  - object
  - name
  - string
  - options
  - int32
  - configuration
  - option
  - vba
  - delete
  - faces
  - add
  - feature
  - include
  - library
  - vb
  - net
  - blended
---

# IAttributeDef.CreateInstance5

Creates an instance of this attribute on the specified object with the specified options.

## Signature

```csharp
Attribute CreateInstance5( 
   ModelDoc2
OwnerDoc
,
   System.Object
OwnerObj
,
   System.String
NameIn
,
   System.Int32
Options
,
   System.Int32
ConfigurationOption
)
```
## Parameters

- `OwnerDoc` (ModelDoc2): Document whose FeatureManager design tree to which to add this attribute
- `OwnerObj` (System.Object): Component or entity to which to add this attribute: IBODY2 ICOMPONENT2 IENTITY , which can be a face, loop, edge, vertex, or feature MODELDOC2 if NULL
- `NameIn` (System.String): Name to assign to this attribute instance (see Remarks )
- `Options` (System.Int32): Creation control options (see Remarks )
- `ConfigurationOption` (System.Int32): Configuration options as defined in swInConfigurationOpts_e

## Return Value

Newly created IAttribute object

## Remarks

When you add an attribute to a feature, the FeatureManager design tree might not reflect the new state of the model. This discrepancy exists for performance reasons (rebuilding the FeatureManager design tree is very time-consuming). You can request a rebuild after you have added a number of attributes to save time.
The attribute is created as a feature and displayed in the FeatureManager design tree, which means that the name specified in nameIn must be unique in the FeatureManager design tree for the document.
You can create attributes on entity objects such as faces and edges, on features, or on the document itself. Do not use this method to set an attribute to or get an attribute from an assembly body. Instead, use
IFace2::SetFaceId
or
IFace2::GetFaceId
to set or get the attribute.
Setting or clearing bits in the options argument controls the creation of the attribute:
Bit
Value
Meaning
1
1
Attribute is created hidden in the FeatureManager design tree (see
IFeature::SetUIState
)
1
0
Attribute is created visible in the FeatureManager design tree
For example, options = 1 creates an attribute that is hidden in the FeatureManager design tree.
NOTE:
By default, SOLIDWORKS adds attributes only to the active configuration. SOLIDWORKS adds the attribute to all other configurations as a suppressed feature. You can unsuppress the attribute by selecting it with
IModelDocExtension::SelectByID2
and calling
IModelDoc2::EditUnsuppressDependent2
. If you want to add your attributes to a non-active configuration, then the user must edit the properties of that particular configuration and make sure that the
Suppress New Features
option is disabled.
If you add an attribute to an entity, SOLIDWORKS strips the attribute feature from the entity if the entity is included in your export to a library feature or library feature part. See the SOLIDWORKS Help for more information about library features.
NOTE:
An attribute is a feature; thus, this method respects the
IConfiguration::SuppressNewFeatures
setting.

## Examples

- Create Attribute (VBA) (Create_Attribute_Example_VB.htm)
- Delete Faces (VBA) (Delete_Faces_Example_VB.htm)
- Add Attribute to Feature and Include in Library Feature (VB.NET) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_VBNET.htm)
- Add Attribute to Feature and Include in Library Feature (C#) (Add_Attribute_to_Feature_and_Include_in_Library_Feature_Example_CSharp.htm)
- Add Attribute to Feature and Include in Library Feature (VBA) (Add_Attribute_to_Feature_and_Include_In_Library_Feature_Example_VB.htm)
- Delete Blended Faces (C#) (Delete_Blended_Faces_Example_CSharp.htm)
- Delete Blended Faces (VB.NET) (Delete_Blended_Faces_Example_VBNET.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)